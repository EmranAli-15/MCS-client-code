import useTitle from '../../hooks/useTitle';
import AllTasks from './allTasks/AllTasks';
import SideContent from './sideContent/SideContent';

const Home = () => {
useTitle('Home')
    return (
        <div>
            <div className="grid md:grid-cols-12 gap-4">
                <div className="hidden md:block col-start-1 col-end-4">
                    <SideContent></SideContent>
                </div>
                <div className="md:col-start-4 md:col-end-10">
                    <AllTasks></AllTasks>
                </div>
                <div className="hidden md:block col-start-10 col-end-13">
                    <SideContent></SideContent>
                </div>
            </div>
        </div>
    );
};

export default Home;