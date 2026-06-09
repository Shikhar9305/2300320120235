import {
  Container,
  Typography
} from "@mui/material";

import {
  useState,
  useEffect
} from "react";

import Loader
from "../components/Loader";

import NotificationCard
from "../components/NotificationCard";

import {
  getNotifications
} from "../api/notificationApi";

import {
  getPriorityList
} from "../utils/priorityHelper";

function PriorityInbox() {

  const [loading, setLoading] =
    useState(true);

  const [priorityData, setPriorityData] =
    useState([]);

  useEffect(() => {

    async function fetchData() {

      const response =
        await getNotifications(
          1,
          10
        );

      const sorted =
        getPriorityList(
          response.notifications || []
        );

      setPriorityData(
        sorted.slice(0, 10)
      );

      setLoading(false);
    }

    fetchData();

  }, []);

  return (
    <Container sx={{ mt: 4 }}>

      <Typography
        variant="h4"
        gutterBottom
      >
        Priority Inbox
      </Typography>

      {loading && <Loader />}

      {!loading &&
        priorityData.map(
          (item) => (
            <NotificationCard
              key={item.ID}
              item={item}
              seen={false}
            />
          )
        )}

    </Container>
  );
}

export default PriorityInbox;