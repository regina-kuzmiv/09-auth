import type { Note, Tag } from "@/types/note";
import nextServer from "./api";
import { User } from "@/types/user";

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
  const response = await nextServer.get<NoteResponseProps>("/notes", {
    params: {
      search,
      page,
      perPage,
      tag,
    },
  });
  return response.data;
}

export type NoteCreateProps = {
  title: string;
  content: string;
  tag: Tag;
};

export async function createNote(newNote: NoteCreateProps): Promise<Note> {
  const response = await nextServer.post<Note>("/notes", {
    title: newNote.title,
    content: newNote.content,
    tag: newNote.tag,
  });
  return response.data;
}

export async function deleteNote(id: string): Promise<Note> {
  const response = await nextServer.delete<Note>(`/notes/${id}`);
  return response.data;
}

export async function fetchNoteById(id: string): Promise<Note> {
  const response = await nextServer.get<Note>(`/notes/${id}`);
  return response.data;
}

export type RegisterRequest = {
  email: string;
  password: string;
};

export const register = async (data: RegisterRequest) => {
  const res = await nextServer.post<User>("/auth/register", data);
  return res.data;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export const login = async (data: RegisterRequest) => {
  const res = await nextServer.post<User>("/auth/login", data);
  return res.data;
};

type CheckSessionRequest = {
  success: boolean;
};

export async function checkSession() {
  const res = await nextServer.get<CheckSessionRequest>("/auth/session");
  return res.data.success;
}

export async function getMe() {
  const { data } = await nextServer.get("/users/me");
  return data;
}

export const logout = async (): Promise<void> => {
  await nextServer.post("/auth/logout");
};

// updateMe
