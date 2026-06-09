# Stage 1

## Approach

Notifications are prioritized using:

1. Notification Type Weight
2. Recency

Priority order:

Placement > Result > Event

Weights:

- Placement = 3
- Result = 2
- Event = 1

Within the same category, newer notifications receive higher priority.

---

## Priority Formula

Priority Score =

(Type Weight × Constant) + Timestamp

This guarantees:

- Placement notifications always rank above Result notifications.
- Result notifications always rank above Event notifications.
- Newer notifications rank higher within the same category.

---

## Scalability

As new notifications arrive:

1. Compute priority score.
2. Insert into a min heap of size 10.
3. If heap size exceeds 10, remove lowest priority notification.

Complexity:

Insertion: O(log 10)

Space: O(10)

This allows maintaining the top 10 notifications efficiently without sorting the entire dataset repeatedly.