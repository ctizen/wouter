import { renderHook, act } from "@testing-library/react-hooks";
import { useNavigate, useLocation } from "../index.js";

it("is a shortcut hook that returns 2nd arg of `useLocation`", () => {
  const { result, unmount } = renderHook(() => useNavigate());
  const navigate = result.current;

  act(() => navigate("/about"));
  expect(location.pathname).toBe("/about");

  unmount();
});
