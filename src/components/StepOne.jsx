import { Typography } from "@mui/material";

import Template from "./Templates";
import Profile from "./Profile";

export default function StepOne() {
  return (
    <div>
      {/* <div className="mx-8 mt-10">
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            borderRadius: "8px",
            border: "2px solid rgba(0, 0, 0, 0.12)",
            boxShadow: "none",
          }}
        >
          <Typography className="p-4 bg-slate-200 rounded-s-md text-slate-400">
            link.page/
          </Typography>

          <InputBase
            sx={{ ml: 1, flex: 1 }}
            className="ml-2"
            placeholder="آدرس دلخواه شما"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Paper>
      </div> */}
      <Typography dir="rtl" className="p-5 font-yekan">
        قالب صفحه (قالب صفحه دلخواهتون رو انتخاب کنین)
      </Typography>

      <Template />
      <Profile />
    </div>
  );
}
