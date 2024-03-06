import { selector } from "recoil";
import { todoListFilterState } from "../atoms/todoListFilterState";
import { todoListState } from "../atoms/todoListState";

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  // 여러 메서드가 있는데 get 메서드는 다른 selector나 atom의 값을 읽어올 때 사용
  get: ({ get }) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    // filter에 따라서 list를 필터링
    switch (filter) {
      // filter가 "Show Completed"일 때는 list에서 isComplete가 true인 것만 반환
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      // filter가 "Show Uncompleted"일 때는 list에서 isComplete가 false인 것만 반환
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      // filter가 "Show All"일 때는 list전체를 그대로 반환
      default:
        return list;
    }
  },
});
