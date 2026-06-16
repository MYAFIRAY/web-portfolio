document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Profil
    document.getElementById('profile-name').textContent = profileData.name;
    document.getElementById('profile-role').textContent = profileData.role;
    document.getElementById('profile-bio').innerHTML = profileData.bio; // Pakai innerHTML agar bisa baca format
    document.getElementById('profile-location').textContent = profileData.location;
    document.getElementById('profile-avatar').src = profileData.avatar;
    
    document.getElementById('btn-email').href = "mailto:" + profileData.email;
    document.getElementById('btn-linkedin').href = profileData.linkedin;
    document.getElementById('btn-github').href = profileData.github;

    // 2. Render Tech Skills
    const skillsContainer = document.getElementById('skills-container');
    skillsData.forEach((skill) => {
        const div = document.createElement('div');
        div.className = "flex flex-col items-center justify-center bg-gray-900/50 p-5 rounded-2xl border border-gray-800/50 hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1";
        div.innerHTML = `
            <i class="${skill.icon} text-4xl mb-3 drop-shadow-md opacity-80 group-hover:opacity-100"></i>
            <span class="text-xs font-semibold text-gray-400 tracking-wide">${skill.name}</span>
        `;
        skillsContainer.appendChild(div);
    });

    // 3. Render Analytical / Business Skills
    const analyticalContainer = document.getElementById('analytical-container');
    analyticalSkills.forEach(skill => {
        const span = document.createElement('span');
        span.className = "px-4 py-2 bg-blue-900/10 text-blue-300 text-sm font-medium rounded-full border border-blue-500/20 backdrop-blur-sm";
        span.textContent = skill;
        analyticalContainer.appendChild(span);
    });

    // 4. Render Experience (Timeline)
    const expContainer = document.getElementById('experience-container');
    experienceData.forEach(exp => {
        const div = document.createElement('div');
        div.className = "relative pl-8 sm:pl-32 py-1 group"; 
        div.innerHTML = `
            <div class="font-bold text-blue-500/80 mb-1 sm:mb-0 sm:absolute sm:left-0 sm:translate-x-0 text-sm tracking-widest uppercase">${exp.period}</div>
            <div class="flex flex-col sm:flex-row items-start mb-2">
                <div class="font-bold text-xl text-gray-100">${exp.role}</div>
            </div>
            <div class="text-blue-200/50 text-sm mb-2 font-medium">${exp.company}</div>
            <div class="text-gray-400 text-sm leading-relaxed">${exp.description}</div>
            <div class="absolute left-0 top-0 h-full w-px bg-gray-800 group-hover:bg-blue-500/50 transition-colors sm:left-28 group-last:bg-transparent"></div>
            <div class="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-blue-500/50 sm:left-[108px] transition-transform group-hover:scale-150 group-hover:bg-blue-400"></div>
        `;
        expContainer.appendChild(div);
    });

    // 5. Render Project Cards (Dengan Logika Smart Button UX)
    const projectsContainer = document.getElementById('projects-container');
    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.className = "flex flex-col h-full group relative bg-gray-900/40 backdrop-blur-xl rounded-[2rem] border border-gray-800/60 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.15)]";
        
        const techBadges = project.techStack.map(tech => 
            `<span class="bg-gray-800 text-gray-300 text-xs px-3 py-1.5 rounded-lg border border-gray-700">${tech}</span>`
        ).join('');

        // Cek apakah link tersedia atau masih "#"
        const isLinkValid = project.link !== "#";
        const isVideo = project.link.includes('youtube') || project.link.includes('youtu.be');
        
        // Logika dinamis untuk teks dan gaya tombol
        const buttonText = isLinkValid ? (isVideo ? 'Tonton Demo Video' : 'Eksplorasi Proyek') : 'Dalam Pengembangan';
        const buttonIcon = isLinkValid 
            ? (isVideo 
                ? `<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>`
                : `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-4 4m4-4H3"></path></svg>`) 
            : `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>`; // Ikon gembok

        const buttonClass = isLinkValid 
            ? "mt-auto inline-flex items-center justify-center gap-2 w-full bg-gray-800 hover:bg-blue-600 text-white text-sm font-bold py-3.5 rounded-xl transition-all duration-300 shrink-0" 
            : "mt-auto inline-flex items-center justify-center gap-2 w-full bg-gray-800/30 text-gray-500 text-sm font-bold py-3.5 rounded-xl cursor-not-allowed shrink-0";
            
        const buttonAction = isLinkValid ? `href="${project.link}" target="_blank"` : `href="javascript:void(0)"`;

        card.innerHTML = `
            <div class="relative overflow-hidden p-3 shrink-0">
                <img src="${project.image}" alt="${project.title}" class="w-full h-56 object-cover rounded-[1.5rem] transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0">
            </div>
            <div class="px-7 pb-8 pt-4 flex flex-col flex-grow">
                <span class="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2 block">${project.category}</span>
                <h3 class="text-2xl font-bold text-white mb-3 tracking-tight">${project.title}</h3>
                <p class="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-8 shrink-0">
                    ${techBadges}
                </div>
                <a ${buttonAction} class="${buttonClass}">
                    ${buttonText}
                    ${buttonIcon}
                </a>
            </div>
        `;
        projectsContainer.appendChild(card);
    });

    // 6. Render Case Studies (Khusus Kemampuan Analisis SI)
    const caseStudiesContainer = document.getElementById('case-studies-container');
    if (caseStudiesContainer) {
        caseStudiesData.forEach(study => {
            const card = document.createElement('a');
            card.href = study.link;
            card.target = "_blank"; // Membuka dokumen di tab baru
            card.className = "block bg-gray-900/40 border border-gray-800/60 p-8 rounded-[2rem] hover:-translate-y-2 hover:border-blue-500/30 transition-all duration-300 group cursor-pointer";
            card.innerHTML = `
                <div class="w-14 h-14 bg-blue-900/20 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${study.icon}"></path></svg>
                </div>
                <span class="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-3 block">${study.category}</span>
                <h3 class="text-xl font-bold text-white mb-4 leading-snug">${study.title}</h3>
                <p class="text-gray-400 text-sm leading-relaxed mb-8">${study.description}</p>
                <div class="flex items-center text-sm font-bold text-blue-500 group-hover:text-blue-400">
                    Baca Dokumen 
                    <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
            `;
            caseStudiesContainer.appendChild(card);
        });
    }
});