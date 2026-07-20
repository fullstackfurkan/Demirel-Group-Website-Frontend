const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const replaceInFile = (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Replace process.env.NEXT_PUBLIC_API_URL with the hardcoded URL
    content = content.replace(/\$\{process\.env\.NEXT_PUBLIC_API_URL\}/g, 'https://demirel-group-website-backend.onrender.com');
    content = content.replace(/process\.env\.NEXT_PUBLIC_API_URL/g, "'https://demirel-group-website-backend.onrender.com'");

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    }
};

const walkSync = (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walkSync(filePath);
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
            replaceInFile(filePath);
        }
    }
};

walkSync(directoryPath);
console.log('Replacement complete.');
