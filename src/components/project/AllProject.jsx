import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const AllProject = () => {
    const [projects, setProjects] = useState([]);
    const getProjects = async () => {
        try {
            const res = await axios.get('/projects.json');
            const data = res.data;
            setProjects(data)

        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getProjects()
    }, [])
    console.log(projects)
    return (
        <div className='max-w-[1400px] w-full mx-auto lg:md:px-4 px-4 lg:md:mt-10 mt-6'>
            <div data-aos="fade-right">
                <h3 className='text-[#FE6B01] font-bold font-montserrat lg:md:text-4xl text-3xl'>Our Previous Projects</h3>
                <h4 className='pt-[1%] lg:md:text-3xl text-lg font-semibold text-[#514949]'>We are More than Just an Agency</h4>
            </div>

            <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className='grid lg:md:grid-cols-3 grid-cols-1 gap-4 mt-10'
            >
                {projects.map((project) => (
                    <div key={project.id} className='border-[2px] border-[#fff] bg-[#fff] hover:border-[#FE6B01] rounded-md transform transition-transform ease-in-out duration-200 delay-200 cursor-pointer p-4'>
                        <Image alt={project.title}
                            src={project.banner}
                            width={300}
                            height={300}
                            className='w-full rounded-md' />
                        <h2 className="text-[#030303] font-semibold lg:md:text-xl text-[18px] my-2">{project.title}</h2>
                        <h3 className="text-[#FE6B01] font-semibold lg:md:text-lg text-[16px] my-2">{project.category}</h3>
                        <p className="font-normal lg:md:text-[18px] text-[14px] pb-4">{project.description}</p>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default AllProject;