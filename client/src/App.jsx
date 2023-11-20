import { AuthUser } from './context/authContext';
import { Routers } from './routers/Routers';

function App() {
    return (
        <AuthUser>
            <Routers />
        </AuthUser>
    );
}

export default App;