import ThemeSelector from "@/components/ThemeSwticher";
import SearchCityInput from "@/components/SearchCityInput";

export default function Header() {
  return (
    <header className="flex justify-center p-5 mb-5 rounded-2xl bg-[var(--color-primary)]/50">
      <SearchCityInput></SearchCityInput>
      <ThemeSelector></ThemeSelector>
    </header>
  );
}
