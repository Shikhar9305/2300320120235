import {
  Card,
  CardContent,
  Typography,
  Chip
} from "@mui/material";

function NotificationCard({
  item,
  seen,
  onClick
}) {
  return (
    <Card
      onClick={onClick}
      sx={{
        mb: 2,
        cursor: "pointer",
        opacity: seen ? 0.7 : 1
      }}
    >
      <CardContent>

        <Typography
          variant="h6"
        >
          {item.Message}
        </Typography>

        <Chip
          label={item.Type}
          size="small"
        />

        <Typography
          variant="body2"
          sx={{ mt: 1 }}
        >
          {item.Timestamp}
        </Typography>

        {!seen && (
          <Chip
            color="error"
            label="NEW"
            sx={{ ml: 2 }}
          />
        )}

      </CardContent>
    </Card>
  );
}

export default NotificationCard;