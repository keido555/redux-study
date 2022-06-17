import Link from "next/link";
import { FC } from "react";
import { TodoCounter } from "src/components/TodoCounter";

export const Header: FC = () => {
  return (
    <header style={{ borderBottom: "solid 1px #e5e5e5" }}>
      <nav
        style={{
          height: "90px",
          backgroundColor: "rgb(255, 255, 255)",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>
          <Link href="/">
            <a>React状態管理</a>
          </Link>
        </h1>
        <div>
          <Link href="/">
            <a>TODO一覧</a>
          </Link>
          <Link href="/add">
            <a>TODO追加</a>
          </Link>
        </div>
      </nav>

      <TodoCounter />
    </header>
  );
};
