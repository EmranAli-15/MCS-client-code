import AllTasks from './allTasks/AllTasks';

const Home = () => {
    
    return (
        <div>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-start-1 col-end-4">01</div>
                <div className="col-start-4 col-end-10">
                    <AllTasks></AllTasks>
                </div>
                <div className="col-start-10 col-end-13">03</div>
            </div>
        </div>
    );
};

export default Home;