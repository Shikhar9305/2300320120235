const weights = {
  Placement: 3,
  Result: 2,
  Event: 1
};

export function getPriorityList(items) {
  return [...items]
    .map((notification) => ({
      ...notification,

      priority:
        weights[notification.Type] *
          1000000 +
        new Date(
          notification.Timestamp
        ).getTime()
    }))
    .sort(
      (a, b) =>
        b.priority - a.priority
    );
}