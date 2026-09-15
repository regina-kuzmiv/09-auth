import nextServer from "./api";
import type { Note, Tag } from "@/types/note";
import { cookies } from "next/headers";

interface NoteResponseProps {
  notes: Note[];
  totalPages: number;
}

export async function fetchNotes(
  search: string,
  page: number,
  perPage: number,
  tag: string | undefined,
): Promise<NoteResponseProps> {
  const cookieStore = await cookies();
  const response = await nextServer.get<NoteResponseProps>("/notes", {
    params: {
      search,
      page,
      perPage,
      tag,
    },
    headers: { Cookie: cookieStore.toString() },
  });
  return response.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const cookieStore = await cookies();
  const response = await nextServer.get<Note>(`/notes/${id}`, {
    headers: { Cookie: cookieStore.toString() },
  });
  return response.data;
}

export async function checkSession() {
  const cookieStore = await cookies();
  const res = await nextServer.get("/auth/session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return res;
}

export async function getMe() {
  const cookieStore = await cookies();
  const { data } = await nextServer.get("/users/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });
  return data;
}
