export default function ThemeCard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded bg-gray-50 p-8 text-neutral-900 border border-gray-100">
        Hello Rupom. Currently you are working as an Associate Software Enginner
        at ShellBeeHaken Ltd. You should work very hard to improve your skills
        quickly.
      </div>
      <div>
        <button className="rounded p-3 bg-blue-600 text-white">
          Change Theme
        </button>
      </div>
    </div>
  );
}
