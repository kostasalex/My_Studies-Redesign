import styles from "./NavTabs.module.css";

const NavTabs = ({ tabs, onTabChange, activeTab }) => {
    return (
        <div className={styles['semester-tabs']}>
            <ul className="nav nav-tabs">
                {tabs.map((tab, index) => (
                    <li key={index} className="nav-item">
                        <a
                            className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                            onClick={(e) => {
                                e.preventDefault();
                                onTabChange(tab);
                            }}
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </div>

    );
};

export default NavTabs;
