import css from "./SearchBox.module.css";

// interface SearchBoxProps {
//   onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

interface SearchBoxProps {
  onSearchChange: (value: string) => void;
}

export default function SearchBox({ onSearchChange }: SearchBoxProps) {
  return (
    <input
      className={css.input}
      type="text"
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder="Search notes"
    />
  );
}
