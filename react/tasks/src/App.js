import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
    return (
        <>
            <h1>
                Count:
            </h1>
            <div className="btn-group" role="group">
                <button className='btn btn-sm btn-dark'>
                    Increment
                </button>
                <button className='btn btn-sm btn-dark'>
                    Decrement
                </button>
            </div>
            <h1>
                Color Picker
            </h1>
            <div></div>
            <div className="btn-group" role="group">
                <button className="btn btn-sm btn-danger">
                    Red
                </button>
                <button className='btn btn-sm btn-success'>
                    Green
                </button>
                <button className='btn btn-sm btn-primary'>
                    Blue
                </button>
            </div>
            <h1>
                Toggle Switch
            </h1>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch"/>
            </div>
            <p>
                Current State:
            </p>
        </>
    );
}

export default App;
