import { SEARCH_SUGGESTIONS } from "@/lib/content";

export default function SearchSuggestions() {
  return (
    <datalist id="mandarinmallu-search-suggestions">
      {SEARCH_SUGGESTIONS.map((s) => (
        <option value={s} key={s} />
      ))}
    </datalist>
  );
}
