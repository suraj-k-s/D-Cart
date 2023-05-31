import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import './app.css'
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Category from "./components/Category";
import Country from "./components/Country";
import State from "./components/State";
import District from "./components/District";
import Place from "./components/Place";
import Material from "./components/Material";
import Subcategory from "./components/Subcategory";
import Designer_verification from "./components/Designer_verification";
import Company_verification from "./components/Company_verification";
import Design_verification from "./components/Design_verification";
import View_complaints from "./components/View_complaints";
import Reply from "./components/Reply";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="Aapp">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/category" element={<Category/>}/>
              <Route path="/country" element={<Country/>}/>
              <Route path="/state" element={<State/>}/>
              <Route path="/district" element={<District/>}/>
              <Route path="/place" element={<Place/>}/>
              <Route path="/material" element={<Material/>}/>
              <Route path="/subcategory" element={<Subcategory/>}/>
              <Route path="/DesignerVerification" element={<Designer_verification/>}/>
              <Route path="/DesignVerification" element={<Design_verification/>}/>
              <Route path="/CompanyVerification" element={<Company_verification/>}/>
              <Route path="/View_complaints" element={<View_complaints/>}/>
              <Route path="/Reply" element={<Reply/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
