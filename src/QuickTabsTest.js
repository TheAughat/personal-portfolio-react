import React from 'react';
import './test.css';
import { Tabs } from '@mui/material';
// import { Link } from 'react-scroll/modules';
import ScrollTab from './ScrollTab';

function QuickTabsTest() {
    const [tabValue, setTabValue] = React.useState(0);

    // const handleTabSwitch = (e, newVal) => {
    //     console.log('manual');
    //     setTabValue(newVal);
    //     document.getElementById('section-' + (newVal + 1)).scrollIntoView({block: 'start', behavior: 'smooth'});
    // };

    function handleSetActive(e) {
        const val = parseInt(e.split('-')[1]) - 1;
        // console.log(val);
        setTabValue(val);
    }


    React.useEffect(() => {
        const sections = ['section-1', 'section-2', 'section-3', 'section-4'];
        const observer = new IntersectionObserver(entries => {
            // console.log(entries);
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // console.log(entry.target.id);
                    handleSetActive(entry.target.id);
                }
            });
        }, {
            threshold: 0.7,
            rootMargin: '-100px',
        });

        sections.forEach(section => observer.observe(document.getElementById(section)));
    }, []);


    const linkProps = {
        // spy: true,
        // onSetActive: handleSetActive,
        duration: 500,
        offset: -100,
        smooth: true,
        // onClick: e => handleSetActive(e.target.id),

    };


    return (
        <div>
            <Tabs
                variant='fullWidth'
                value={tabValue}
                // onChange={handleTabSwitch}
                sx={{position: 'sticky', top: 0, background: 'white'}}
            >
                <ScrollTab label='First' to='section-1' {...linkProps}/>
                <ScrollTab label='Second' to='section-2' {...linkProps}/>
                <ScrollTab label='Third' to='section-3' {...linkProps}/>
                <ScrollTab label='Fourth' to='section-4' {...linkProps}/>
            </Tabs>

            <div className='sections' id='section-1'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
            </div>
            <div className='sections' id='section-2'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
            </div>
            <div className='sections' id='section-3'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
            </div>
            <div className='sections' id='section-4'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aperiam quas modi voluptatem. Eligendi aut expedita dolor dolore inventore! 
                    A alias provident fuga accusantium reprehenderit, earum veritatis voluptates iste aliquam deserunt omnis aperiam modi repellendus, voluptatem non ullam.
                    Quaerat, tempora.
                </p>
            </div>
        </div>
    );
}

export default QuickTabsTest;
