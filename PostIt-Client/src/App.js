/** @format */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import SignupPage from "./pages/SignupPage";
import Stories from "./pages/Stories";
import MyStories from "./pages/MyStories";
import { Toaster } from "react-hot-toast";
import CreateStory from "./pages/CreateStory";
import EditStory from "./pages/EditStory";
import AllUserStories from "./components/AllUserStories";
import DraftUserStories from "./components/DraftUserStories";
import PublishedUserStories from "./components/PublishedUserStories";
import ViewStory from "./pages/ViewStory";

function App() {
  return (
    <div className="App">
      <Toaster />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/my-stories" element={<MyStories />}>
                <Route path="/my-stories" element={<AllUserStories />} />
                <Route path="drafts" element={<DraftUserStories />} />
                <Route path="published" element={<PublishedUserStories />} />
              </Route>
              <Route path="/create" element={<CreateStory />} />
              <Route path="/edit/:id" element={<EditStory />} />
              <Route path="/story/:id" element={<ViewStory />} />
            </Route>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
