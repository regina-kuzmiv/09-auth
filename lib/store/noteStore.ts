import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { NoteCreateProps } from "../api";

type NoteDraftStore = {
  draft: NoteCreateProps;
  setDraft: (note: NoteCreateProps) => void;
  clearDraft: () => void;
};

const initialDraft: NoteCreateProps = {
  title: "",
  content: "",
  tag: "Todo",
};

export const useNoteDraftStore = create<NoteDraftStore>()(
  persist(
    (set) => ({
      draft: initialDraft,
      setDraft: (note) => set(() => ({ draft: note })),
      clearDraft: () => set(() => ({ draft: initialDraft })),
    }),
    {
      name: "note-draft",
      partialize: (state) => ({ draft: state.draft }),
    },
  ),
);
