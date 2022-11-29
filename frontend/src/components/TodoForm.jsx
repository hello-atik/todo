import * as Yup from "yup";
import { useRef } from "react";
import { Formik, Form } from "formik";

// material-ui components.
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack ";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

// custom styles.
const styles = {
  normal: {
    "&::after": {
      right: 10,
      width: 20,
      height: 20,
      content: '""',
      borderRadius: 5,
      position: "absolute",
      backgroundColor: "#565656",
    },
  },
  low: {
    "&::after": {
      right: 10,
      width: 20,
      height: 20,
      content: '""',
      borderRadius: 5,
      position: "absolute",
      backgroundColor: "#51D688",
    },
  },
  medium: {
    "&::after": {
      right: 10,
      width: 20,
      height: 20,
      content: '""',
      borderRadius: 5,
      position: "absolute",
      backgroundColor: "#FFA500",
    },
  },
  high: {
    "&::after": {
      right: 10,
      width: 20,
      height: 20,
      content: '""',
      borderRadius: 5,
      position: "absolute",
      backgroundColor: "#F92467",
    },
  },
};

const TodoForm = () => {
  const formikRef = useRef();

  const initialVlues = {
    title: "",
    description: "",
    priority: 0,
  };

  const todoSchema = Yup.object().shape({
    title: Yup.string().max(40).required(),
    description: Yup.string().max(150),
    priority: Yup.number().integer().required(),
  });

  const handleSubmit = (values) => {
    formikRef.current.resetForm();
    console.log(values);
  };

  return (
    <Paper sx={{ width: "100%", p: 3 }} elevation={2}>
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: 900, mb: 1, color: "#117855" }}
      >
        Add Todo
      </Typography>

      <Divider sx={{ mb: 3 }} />

      <Formik
        onSubmit={handleSubmit}
        initialValues={initialVlues}
        validationSchema={todoSchema}
        innerRef={formikRef}
      >
        {({ values, errors, touched, handleChange }) => (
          <Form>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                id="title"
                size="small"
                label="Title"
                value={values.title}
                onChange={handleChange}
                error={touched.title && Boolean(errors.title)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <TextField
                rows={4}
                fullWidth
                multiline
                size="small"
                id="description"
                label="Description"
                error={Boolean(errors.description)}
                onChange={handleChange}
                value={values.description}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>

            <Box sx={{ mb: 3 }}>
              <Stack spacing={3} direction="row" justifyContent="space-between">
                <FormControl sx={{ minWidth: 120 }} size="small">
                  <InputLabel id="priotiry">Priority</InputLabel>
                  <Select
                    name="priority"
                    labelId="priotiry"
                    label="Priority"
                    value={values.priority}
                    onChange={handleChange}
                  >
                    <MenuItem value={0} sx={styles.normal}>
                      Normal
                    </MenuItem>
                    <MenuItem value={1} sx={styles.low}>
                      Low
                    </MenuItem>
                    <MenuItem value={2} sx={styles.medium}>
                      Medium
                    </MenuItem>
                    <MenuItem value={3} sx={styles.high}>
                      High
                    </MenuItem>
                  </Select>
                </FormControl>

                <Box>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    disabled={
                      !values.title ||
                      Boolean(errors.title) ||
                      Boolean(errors.description)
                    }
                  >
                    Add Todo
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};

export default TodoForm;
