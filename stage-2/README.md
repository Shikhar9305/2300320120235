# Stage 1 - Notification System Design

## Problem Statement

The notification platform receives different kinds of notifications such as Placement updates, Results, and Events. As the number of notifications grows, users may miss important updates because all notifications are displayed together.

The objective is to identify and display the most important unread notifications first. Priority is determined using both the notification category and its recency.

---

## Priority Strategy

Different notification types do not have the same importance.

The following priority order has been considered:

| Notification Type | Priority |
| ----------------- | -------- |
| Placement         | Highest  |
| Result            | Medium   |
| Event             | Lowest   |

Placement-related notifications are generally time-sensitive and directly impact students' career opportunities. Result notifications are important but usually remain relevant for a longer duration. Event notifications are useful but are given lower priority compared to placement and result updates.

---

## Approach

A weight is assigned to every notification type.

```text
Placement = 3
Result = 2
Event = 1
```

For each notification:

1. Determine its category weight.
2. Compare notifications using:

   * Higher category weight first.
   * More recent timestamp if category weight is the same.
3. Sort the notifications.
4. Return only the top 10 notifications.

This ensures that important placement notifications are always preferred, while newer notifications appear before older ones within the same category.

---

## Data Structure Choice

The notifications are stored in an array because:

* The API returns notifications as a collection.
* Sorting can be performed efficiently.
* The implementation remains simple and easy to maintain.

For larger datasets or continuous notification streams, a Min Heap of size 10 can be used to maintain the top notifications without sorting the entire dataset repeatedly.

---

## Handling New Notifications

If new notifications continue to arrive:

1. Calculate the priority of the incoming notification.
2. Compare it against the currently stored top notifications.
3. Update the collection only when the new notification has a higher priority.

This avoids reprocessing the complete dataset every time.

---

## Time Complexity

### Current Implementation

Sorting all notifications:

```text
O(n log n)
```

Selecting top 10 notifications:

```text
O(10)
```

Overall:

```text
O(n log n)
```

---

### Optimized Streaming Approach

Using a Min Heap of size 10:

```text
Insertion: O(log 10)
```

Which is effectively:

```text
O(1)
```

for practical purposes.

This approach scales better when notifications are continuously generated.

---

## Logging Strategy

Logging middleware is integrated throughout the implementation.

The following events are logged:

* Notification fetch started
* Notification fetch completed
* Priority calculation started
* Top notifications generated
* API errors
* Unexpected failures

This helps in debugging and monitoring the system during execution.

---

## Assumptions

* Every notification contains a valid type.
* Every notification contains a valid timestamp.
* The API response format remains consistent.
* Only Placement, Result, and Event categories are considered for priority calculation.

---

## Conclusion

The proposed solution ranks notifications using a combination of category importance and recency. The implementation is simple, efficient, and can be extended easily for larger notification volumes by introducing a heap-based approach.
