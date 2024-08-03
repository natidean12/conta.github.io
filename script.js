
  function calculateValues() {
      const rows = document.querySelectorAll('#data-body tr');
      let totalMonthly = 0;

      rows.forEach(row => {
          const chemicalsInput = row.querySelector('.chemicals');
          const otherProceduresInput = row.querySelector('.other-procedures');
          const totalInput = row.querySelector('.total');
          const chemicalsPercentInput = row.querySelector('.chemicals-percent');
          const otherProceduresPercentInput = row.querySelector('.other-procedures-percent');
          const dailyPercentInput = row.querySelector('.daily-percent');

          const chemicals = parseFloat(chemicalsInput.value) || 0;
          const otherProcedures = parseFloat(otherProceduresInput.value) || 0;

          const total = chemicals + otherProcedures;
          const chemicalsPercent = chemicals * 0.35;
          const otherProceduresPercent = otherProcedures * 0.50;
          const dailyPercent = chemicalsPercent + otherProceduresPercent;

          totalInput.value = total.toFixed(2);
          chemicalsPercentInput.value = chemicalsPercent.toFixed(2);
          otherProceduresPercentInput.value = otherProceduresPercent.toFixed(2);
          dailyPercentInput.value = dailyPercent.toFixed(2);

          totalMonthly += dailyPercent;
      });

      document.getElementById('monthly-total').textContent = totalMonthly.toFixed(2);
  }

  function addRow() {
      const tableBody = document.getElementById('data-body');
      const newRow = document.createElement('tr');

      newRow.innerHTML = `
          <td><input type="date" class="date"></td>
          <td><input type="number" class="chemicals" onchange="calculateValues()"></td>
          <td><input type="number" class="other-procedures" onchange="calculateValues()"></td>
          <td><input type="text" class="total" readonly></td>
          <td><input type="text" class="chemicals-percent" readonly></td>
          <td><input type="text" class="other-procedures-percent" readonly></td>
          <td><input type="text" class="daily-percent" readonly></td>
      `;

      tableBody.appendChild(newRow);
  }
