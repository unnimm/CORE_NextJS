"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const Page = () => {
    const router = useRouter();
  return (
    <>
      <div>글작성</div>
      <form
        onSubmit={(e: any) => {
          e.preventDefault(); //새로고침 서밋 누르면 새로고침이 자동으로 되는게 그걸 막기 위해서 쓴다.

          axios
            .post(
              `/api/post?name=${e.target.name.value}&department=${e.target.department.value}`
            )
            .then((res) => {
                router.push('/')
              return;
            });
        }}
      >
        <div>
          <label className="block" htmlFor="name">
            이름
          </label>
          <textarea id="name" name="name" />
        </div>
        <div />
        <div>
          <label className="block" htmlFor="department">
            학과
          </label>
          <textarea id="department" name="department" />
        </div>

        <div>
          <label className="block" htmlFor="file">
            다운로드
          </label>
          <input type="file" id="file" className="hidden" />
          <button type="submit" className="bg-blue-500 text-white">
            제출
          </button>
        </div>
      </form>
    </>
  );
};
export default Page;
