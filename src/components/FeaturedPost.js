import * as React from 'react';
import { useState } from 'react';


function FeaturedPost() {
    const [currentTab, setCurrentTab] = useState('tab1');
    const tabList = [
        {
            name: 'news1',
            label: 'Tab 1',
            content: (
                <div className='tab-content'>
                    <h2>New Content 1</h2>
                    <p>This is the tab content. You can seperate this as a component.</p>
                    <p>lorem ipsum die tent.</p>
                </div>
            )
        },
        {
            name: 'news2',
            label: 'Tab 2',
            content: (
                <div className='tab-content'>
                    <h2>New Content 2</h2>
                    <p>This is the tab content. You can seperate this as a component.</p>
                    <p>lorem ipsum die tent.</p>
                </div>
            )
        },
        {
            name: 'news3',
            label: 'Tab 3',
            content: (
                <div className='tab-content'>
                    <h2>New Content 1</h2>
                    <p>This is the tab content. You can seperate this as a component.</p>
                    <p>lorem ipsum die tent.</p>
                </div>
            )
        }
    
    ];

    return (
        <div className='simple-tabs'>
            <h1>With state hooks</h1>

            <div className='tabs'>
                {tabList.map((tab, i) => (
                    <button key={i} onClick={() => setCurrentTab(tab.name)} className={tab.name === currentTab ? 'active' : ''}>
                        {tab.label}
                    </button>
                ))}
            </div>

            {tabList.map((tab, i) => {
                if (tab.name === currentTab) {
                    return <div key={i}>{tab.current}</div>;
                } else {
                    return null;
                }
            })}
        </div>
    )
}
  

export default FeaturedPost;