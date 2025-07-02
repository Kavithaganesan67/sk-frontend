import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Loader from './components/Loader';
import { DashboardContent } from './pages/Dashboard';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors">
        {loading ? <Loader /> : (
          <Router>
            <Routes>
              <Route path="/" element={<DashboardContent />} />
            </Routes>
          </Router>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;