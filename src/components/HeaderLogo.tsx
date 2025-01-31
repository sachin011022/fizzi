import { FizziLogo } from "./FizziLogo";

export default function HeaderLogo() {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <FizziLogo className="z-10 h-20 cursor-pointer text-sky-800" />
    </header>
  );
}
