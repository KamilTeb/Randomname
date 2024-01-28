const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ['Anna', 'Maria', 'Darek', 'Marek'];
const prefixes = ['Wydaje mi się', 'Mam wrażenie', 'Szczerze uważam', 'Na 100% twierdzę', 'Na pewno wiem']

const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);

    div.textContent = `${prefixes[Math.floor(Math.random() * prefixes.length)]}, że najlepsze imię to ${names[indexName]}`
}
btn.addEventListener('click', nameGenerator);
