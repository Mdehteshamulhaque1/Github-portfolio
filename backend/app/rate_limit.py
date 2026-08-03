import time
from collections import defaultdict, deque


class SlidingWindowLimiter:
    def __init__(self, max_requests: int, window_seconds: int) -> None:
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self._records: dict[str, deque[float]] = defaultdict(deque)

    def allow(self, key: str) -> bool:
        now = time.time()
        threshold = now - self.window_seconds
        queue = self._records[key]

        while queue and queue[0] < threshold:
            queue.popleft()

        if len(queue) >= self.max_requests:
            return False

        queue.append(now)
        return True
