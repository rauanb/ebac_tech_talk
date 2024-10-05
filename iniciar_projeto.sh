# Iniciar node
npm init --yes

# Instalar Parcel (demorou cerca de 5 minutos)
npm install --save-dev parcel

# Criar estrutura de pastas
mkdir -p src/{scripts,styles}

# Criar arquivos base
cat << 'EOF' > src/index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parcel</title>
    <link rel="stylesheet" href="styles/main.scss">
</head>
<body>
    <h1>Olá, parcel!</h1>
    <p>Verifique o console do navegador.</p>
    <script src="scripts/main.js"></script>
</body>
</html>
EOF

cat << 'EOF' > src/scripts/main.js
console.log('Olá, parcel!');
EOF

cat << 'EOF' > src/styles/main.scss
body {
    background-color: gray;
}
EOF

# Adicionar nos scripts do package.json
sed -i '/"scripts": {/a \    "dev": "parcel src/index.html src/scripts/main.js src/styles/main.scss",' package.json

# Adicionar minificador
cat <<'EOF' > sharp.config.json
{
    "png": {
        "quality": 75
    }
}
EOF

# Criar .gitignore
cat << 'EOF' > .gitignore
.parcel-cache
dist
node_modules
EOF

# Executar script
npm run dev