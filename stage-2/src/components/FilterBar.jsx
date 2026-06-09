import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";

function FilterBar({
  selectedType,
  onChange
}) {
  return (
    <Box
      sx={{
        mb: 3,
        width: 250
      }}
    >
      <FormControl fullWidth>
        <InputLabel>
          Notification Type
        </InputLabel>

        <Select
          value={selectedType}
          label="Notification Type"
          onChange={(event) =>
            onChange(event.target.value)
          }
        >
          <MenuItem value="">
            All
          </MenuItem>

          <MenuItem value="Event">
            Event
          </MenuItem>

          <MenuItem value="Result">
            Result
          </MenuItem>

          <MenuItem value="Placement">
            Placement
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default FilterBar;