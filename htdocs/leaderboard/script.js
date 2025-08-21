    const searchInput = document.getElementById('searchInput');
    const classFilter = document.getElementById('classFilter');
    const table = document.getElementById('leaderboardTable');
    const rows = Array.from(table.tBodies[0].rows);

    function filterTable() {
        const search = searchInput.value.toLowerCase();
        const selectedClass = classFilter.value;

        rows.forEach(row => {
            const name = row.cells[1].textContent.toLowerCase();
            const className = row.cells[2].textContent;
            const matchSearch = name.includes(search);
            const matchClass = !selectedClass || className === selectedClass;

            row.style.display = (matchSearch && matchClass) ? '' : 'none';
        });
    }

    searchInput.addEventListener('input', filterTable);
    classFilter.addEventListener('change', filterTable);
