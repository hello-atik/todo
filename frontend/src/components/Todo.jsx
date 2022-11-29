// material-ui components.
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/system/Stack";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// material-ui icons.
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircle from "@mui/icons-material/CheckCircle";
import CheckCircleBlank from "@mui/icons-material/CheckCircleOutline";

const borders = {
  normal: { p: 2, border: "2px solid #565656" },
  low: { p: 2, border: "2px solid #51D688" },
  medium: { p: 2, border: "2px solid #FFA500" },
  high: { p: 2, border: "2px solid #F92467" },
};

const Todo = ({ todo }) => {
  const { title, description, priority } = todo;
  return (
    <Box>
      <Paper variant="outlined" sx={borders[priority]}>
        <Stack direction="row" spacing={0.5} alignItems="center">
          <Checkbox
            sx={{ ml: -1 }}
            icon={<CheckCircleBlank />}
            checkedIcon={<CheckCircle color="success" />}
          />
          <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
        </Stack>
        <Divider sx={{ mt: 1, mb: 2 }} />
        <Typography variant="subtitle2">{description}</Typography>
        {description && <Divider sx={{ my: 2 }} />}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="caption">Edited 25 min ago</Typography>
          <Box>
            <IconButton size="small">
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Todo;
