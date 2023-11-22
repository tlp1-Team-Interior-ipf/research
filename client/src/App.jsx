import { AuthUser } from './context/AuthContext';
import { Routers } from './routers/Routers';

function App() {
    return (
        <AuthUser>
            <Routers />
        </AuthUser>
    );
}

export default App;