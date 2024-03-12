import { Gallery } from "@/component/gallery";
import TodoList from "@/component/todolist";

export default function MyPage() {
  return (
    <section>
      <h1 className="font-semibold text-slate-900 truncate pr-20 text-center">Ilmuwan Yang Luar Biasa</h1>
      <hr />
      <Gallery />
      <hr />
      <TodoList />
    </section>
  );
}