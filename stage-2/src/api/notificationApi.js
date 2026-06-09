import axios from "axios";

const BASE_URL =
  "http://4.224.186.213/evaluation-service/notifications";

const TOKEN =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzaGlraGFyLjIzYjAxMjEyMDVAYWJlcy5hYy5pbiIsImV4cCI6MTc4MDk5MjA3OCwiaWF0IjoxNzgwOTkxMTc4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiM2JkMzM1YzEtYmM0Mi00MDNiLThjMjEtZGU3MjhjZjE0YzI5IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic2hpa2hhciBzaW5naCIsInN1YiI6IjBlNWI1MDMxLTg1OWMtNGExNy1hYTFkLWFhYmYzOWU5NzYyZSJ9LCJlbWFpbCI6InNoaWtoYXIuMjNiMDEyMTIwNUBhYmVzLmFjLmluIiwibmFtZSI6InNoaWtoYXIgc2luZ2giLCJyb2xsTm8iOiIyMzAwMzIwMTIwMjM1IiwiYWNjZXNzQ29kZSI6ImNYdXFodCIsImNsaWVudElEIjoiMGU1YjUwMzEtODU5Yy00YTE3LWFhMWQtYWFiZjM5ZTk3NjJlIiwiY2xpZW50U2VjcmV0IjoiR05LeGJCdFF4cVNQalFGQSJ9.knhV8kiV4UFZ6tsanek-OEgXzAmZWt-L0mFPQ3UKkZk";

export async function getNotifications(
  page = 1,
  limit = 10,
  type = ""
) {
  try {
    const params = {
      page,
      limit
    };

    if (type) {
      params.notification_type = type;
    }

    const response = await axios.get(
      BASE_URL,
      {
        params,
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);

    return {
      notifications: []
    };
  }
}