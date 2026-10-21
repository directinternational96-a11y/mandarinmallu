"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

interface SearchContextValue {
  /** Global search query shared by the navbar, hero, majors and programs. */
  query: string;
  /** Set the query and scroll to the programs section. */
  search: (query: string) => void;
  clear: () => void;
}

const SearchContext = createContext<SearchContextValue | null>(null);

export default function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");

  const search = useCallback((q: string) => {
    setQuery(q);
    document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const clear = useCallback(() => setQuery(""), []);

  const value = useMemo(() => ({ query, search, clear }), [query, search, clear]);

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
}

export function useSearch(): SearchContextValue {
  const ctx = useContext(SearchContext);
  if (!ctx) throw new Error("useSearch must be used within <SearchProvider>");
  return ctx;
}
