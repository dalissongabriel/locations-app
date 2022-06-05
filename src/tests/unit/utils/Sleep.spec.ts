import { sleep } from "@/utils/Sleep";
import { describe, expect, it, vi } from "vitest";

describe("Sleep utils", () => {
  it("should be delay 200ms", async () => {
    vi.useFakeTimers();
    vi.spyOn(global, "setTimeout");
    sleep(200);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 200);
  });
});
