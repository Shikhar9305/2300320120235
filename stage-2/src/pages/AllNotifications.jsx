import {
  Container,
  Button,
  Typography
} from "@mui/material";

import { useState } from "react";
import { useEffect } from "react";

import NotificationCard from "../components/NotificationCard";
import FilterBar from "../components/FilterBar";
import Loader from "../components/Loader";

import { getNotifications }
from "../api/notificationApi";

function AllNotifications() {

  const [records, setRecords] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [filterType, setFilterType] =
    useState("");

  const [page, setPage] =
    useState(1);

  const [seenItems, setSeenItems] =
    useState(
      JSON.parse(
        localStorage.getItem(
          "viewedNotifications"
        ) || "[]"
      )
    );

  async function loadData() {

    setLoading(true);

    const result =
      await getNotifications(
        page,
        10,
        filterType
      );

    setRecords(
      result.notifications || []
    );

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, [page, filterType]);

  function markViewed(id) {

    if (
      seenItems.includes(id)
    ) {
      return;
    }

    const updated =
      [...seenItems, id];

    setSeenItems(updated);

    localStorage.setItem(
      "viewedNotifications",
      JSON.stringify(updated)
    );
  }

  return (
    <Container sx={{ mt: 4 }}>

      <Typography
        variant="h4"
        gutterBottom
      >
        All Notifications
      </Typography>

      <FilterBar
        selectedType={
          filterType
        }
        onChange={
          setFilterType
        }
      />

      {loading && <Loader />}

      {!loading &&
        records.map((item) => (
          <NotificationCard
            key={item.ID}
            item={item}
            seen={seenItems.includes(item.ID)}
            onClick={() =>
              markViewed(item.ID)
            }
          />
        ))}

      <Button
        sx={{ mr: 2 }}
        variant="contained"
        disabled={page === 1}
        onClick={() =>
          setPage(
            page - 1
          )
        }
      >
        Previous
      </Button>

      <Button
        variant="contained"
        onClick={() =>
          setPage(
            page + 1
          )
        }
      >
        Next
      </Button>

    </Container>
  );
}

export default AllNotifications;