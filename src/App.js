import "./App.css";
import Header from "./components/Header";
import TaskList from "./pages/TaskList";

const App = () => {
  return (
    <div className="min-h-screen px-4 py-6 md:px-12 bg-gradient-to-b from-blue-100 to-white">
      <Header />
      <main className="max-w-3xl mx-auto">
        <TaskList />
      </main>
    </div>
  );
};

export default App;
