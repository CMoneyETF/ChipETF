// Data Source 1: Total Dividend (總配息)
const dataTotal = [
  { code: '0056', name: '元大高股息', dividend: 3.888, price: 35.15, valuation: '低' },
  { code: '00701', name: '國泰股利精選30', dividend: 3.903, price: 27.66, valuation: '低' },
  { code: '00702', name: '國泰標普低波高息', dividend: 1.340, price: 23.02, valuation: '合理' },
  { code: '00713', name: '元大台灣高息低波', dividend: 4.714, price: 50.15, valuation: '低' },
  { code: '00730', name: '富邦臺灣優質高息', dividend: 1.246, price: 21.60, valuation: '合理' },
  { code: '00731', name: '復華富時高息低波', dividend: 2.516, price: 66.75, valuation: '高' },
  { code: '00771', name: '元大US高息特別股', dividend: 0.864, price: 16.03, valuation: '合理' },
  { code: '00878', name: '國泰永續高股息', dividend: 1.791, price: 20.56, valuation: '低' },
  { code: '00882', name: '中信中國高股息', dividend: 1.081, price: 15.27, valuation: '偏低' },
  { code: '00900', name: '富邦特選高股息30', dividend: 1.211, price: 12.99, valuation: '低' },
  { code: '00907', name: '永豐優息存股', dividend: 0.731, price: 15.19, valuation: '高' },
  { code: '00915', name: '凱基優選高股息30', dividend: 1.768, price: 21.93, valuation: '低' },
  { code: '00918', name: '大華優利高填息30', dividend: 2.774, price: 22.10, valuation: '低' },
  { code: '00919', name: '群益台灣精選高息', dividend: 2.725, price: 21.32, valuation: '低' },
  { code: '00927', name: '群益半導體收益', dividend: 1.188, price: 19.67, valuation: '合理' },
  { code: '00929', name: '復華台灣科技優息', dividend: 0.791, price: 17.35, valuation: '高' },
  { code: '00930', name: '永豐ESG低碳高息', dividend: 0.915, price: 16.92, valuation: '合理' },
  { code: '00932', name: '兆豐永續高息等權', dividend: 0.584, price: 13.91, valuation: '高' },
  { code: '00934', name: '中信成長高股息', dividend: 0.655, price: 20.04, valuation: '高' },
  { code: '00936', name: '台新永續高息中小', dividend: 0.489, price: 15.27, valuation: '高' },
  { code: '00939', name: '統一台灣高息動能', dividend: 0.717, price: 13.79, valuation: '合理' },
  { code: '00940', name: '元大台灣價值高息', dividend: 0.422, price: 9.09, valuation: '高' },
  { code: '00943', name: '兆豐電子高息等權', dividend: 0.363, price: 14.03, valuation: '高' },
  { code: '00944', name: '野村趨勢動能高息', dividend: 0.683, price: 13.88, valuation: '高' },
  { code: '00946', name: '群益科技高息成長', dividend: 0.451, price: 9.65, valuation: '高' },
  { code: '00956', name: '中信日經高股息', dividend: 0.453, price: 10.88, valuation: '高' },
];

// Data Source 2: Excluding Income Equalization Fund (不含收益平準金)
const dataExcl = [
  { code: '0056', name: '元大高股息', dividend: 2.538, price: 35.15, valuation: '偏低' },
  { code: '00701', name: '國泰股利精選30', dividend: 3.850, price: 27.66, valuation: '低' },
  { code: '00702', name: '國泰標普低波高息', dividend: 1.320, price: 23.02, valuation: '合理' },
  { code: '00713', name: '元大台灣高息低波', dividend: 3.367, price: 50.15, valuation: '偏低' },
  { code: '00730', name: '富邦臺灣優質高息', dividend: 1.227, price: 21.60, valuation: '合理' },
  { code: '00731', name: '復華富時高息低波', dividend: 2.113, price: 66.75, valuation: '高' },
  { code: '00771', name: '元大US高息特別股', dividend: 0.860, price: 16.03, valuation: '合理' },
  { code: '00878', name: '國泰永續高股息', dividend: 1.562, price: 20.56, valuation: '偏低' },
  { code: '00882', name: '中信中國高股息', dividend: 1.080, price: 15.27, valuation: '偏低' },
  { code: '00900', name: '富邦特選高股息30', dividend: 1.200, price: 12.99, valuation: '低' },
  { code: '00907', name: '永豐優息存股', dividend: 0.656, price: 15.19, valuation: '高' },
  { code: '00915', name: '凱基優選高股息30', dividend: 1.123, price: 21.93, valuation: '合理' },
  { code: '00918', name: '大華優利高填息30', dividend: 2.191, price: 22.10, valuation: '低' },
  { code: '00919', name: '群益台灣精選高息', dividend: 1.845, price: 21.32, valuation: '低' },
  { code: '00927', name: '群益半導體收益', dividend: 1.110, price: 19.67, valuation: '合理' },
  { code: '00929', name: '復華台灣科技優息', dividend: 0.790, price: 17.35, valuation: '高' },
  { code: '00930', name: '永豐ESG低碳高息', dividend: 0.827, price: 16.92, valuation: '高' },
  { code: '00932', name: '兆豐永續高息等權', dividend: 0.580, price: 13.91, valuation: '高' },
  { code: '00934', name: '中信成長高股息', dividend: 0.651, price: 20.04, valuation: '高' },
  { code: '00936', name: '台新永續高息中小', dividend: 0.485, price: 15.27, valuation: '高' },
  { code: '00939', name: '統一台灣高息動能', dividend: 0.701, price: 13.79, valuation: '合理' },
  { code: '00940', name: '元大台灣價值高息', dividend: 0.420, price: 9.09, valuation: '高' },
  { code: '00943', name: '兆豐電子高息等權', dividend: 0.362, price: 14.03, valuation: '高' },
  { code: '00944', name: '野村趨勢動能高息', dividend: 0.618, price: 13.88, valuation: '高' },
  { code: '00946', name: '群益科技高息成長', dividend: 0.431, price: 9.65, valuation: '高' },
  { code: '00956', name: '中信日經高股息', dividend: 0.445, price: 10.88, valuation: '高' },
];

let currentTab = 'total';
let searchTerm = '';

// Helper Functions
const getYield = (dividend, price) => ((dividend / price) * 100).toFixed(2);
const calculateTargetPrice = (dividend, rate) => (dividend / (rate / 100)).toFixed(2);

const getValuationClass = (status) => {
  if (status === '低' || status === '偏低') return 'low';
  if (status === '合理') return 'reasonable';
  return 'high';
};

const getDividendLabel = () => currentTab === 'total' ? '近4季配息' : '不含平準金';

// DOM Elements
const tableBody = document.getElementById('tableBody');
const mobileCardsContainer = document.getElementById('mobileCardsContainer');
const searchInput = document.getElementById('searchInput');
const dividendHeader = document.getElementById('dividendHeader');
const tabButtons = document.querySelectorAll('.tab-btn');
const tableEmptyState = document.getElementById('tableEmptyState');
const cardsEmptyState = document.getElementById('cardsEmptyState');

function render() {
  const currentData = currentTab === 'total' ? dataTotal : dataExcl;
  const lowerSearch = searchTerm.toLowerCase();
  
  const filteredData = currentData.filter(item => 
    item.code.toLowerCase().includes(lowerSearch) || 
    item.name.includes(lowerSearch)
  );

  // Update Header
  dividendHeader.textContent = getDividendLabel();

  // Render Desktop Table
  let tableHTML = '';
  if (filteredData.length > 0) {
    tableEmptyState.style.display = 'none';
    tableHTML = filteredData.map(item => `
      <tr>
        <td>${item.code}</td>
        <td>${item.name}</td>
        <td>${item.dividend.toFixed(3)}</td>
        <td class="price-cell">${item.price.toFixed(2)}</td>
        <td class="yield-cell">${getYield(item.dividend, item.price)}%</td>
        <td><span class="badge ${getValuationClass(item.valuation)}">${item.valuation}</span></td>
        <td class="bg-yield-5">${calculateTargetPrice(item.dividend, 5)}</td>
        <td class="bg-yield-6">${calculateTargetPrice(item.dividend, 6)}</td>
        <td class="bg-yield-7">${calculateTargetPrice(item.dividend, 7)}</td>
        <td class="bg-yield-8">${calculateTargetPrice(item.dividend, 8)}</td>
        <td class="bg-yield-9">${calculateTargetPrice(item.dividend, 9)}</td>
        <td class="bg-yield-10">${calculateTargetPrice(item.dividend, 10)}</td>
      </tr>
    `).join('');
  } else {
    tableEmptyState.style.display = 'block';
  }
  tableBody.innerHTML = tableHTML;

  // Render Mobile Cards
  let cardsHTML = '';
  if (filteredData.length > 0) {
    cardsEmptyState.style.display = 'none';
    cardsHTML = filteredData.map(item => `
      <div class="card">
        <div class="card-header">
          <div class="card-title-group">
            <span class="card-code">${item.code}</span>
            <span class="card-title">${item.name}</span>
          </div>
          <div class="card-status-wrapper">
            <span class="card-ref-label">參考價位</span>
            <span class="badge ${getValuationClass(item.valuation)}">${item.valuation}</span>
          </div>
        </div>
        
        <div class="card-body">
          <div class="info-item">
            <span class="info-label">${getDividendLabel()}</span>
            <span class="info-value">${item.dividend.toFixed(3)}</span>
          </div>
          <div class="info-item">
            <span class="info-label">11/24收盤價</span>
            <span class="info-value">${item.price.toFixed(2)}</span>
          </div>
          <div class="info-item">
            <span class="info-label">近4季殖利率</span>
            <span class="info-value highlight">
              ${getYield(item.dividend, item.price)}%
            </span>
          </div>
        </div>

        <details>
          <summary>查看目標殖利率參考價</summary>
          <div class="yield-table-wrapper">
            <table class="yield-table">
              <thead>
                <tr>
                  <th>目標殖利率</th>
                  <th>參考股價 (低於此價)</th>
                </tr>
              </thead>
              <tbody>
                ${[5, 6, 7, 8, 9, 10].map(rate => `
                  <tr>
                    <td style="text-align: center; font-weight: bold">${rate}%</td>
                    <td style="text-align: center">${calculateTargetPrice(item.dividend, rate)}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </details>
      </div>
    `).join('');
  } else {
    cardsEmptyState.style.display = 'block';
  }
  mobileCardsContainer.innerHTML = cardsHTML;
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
  searchTerm = e.target.value.trim();
  render();
});

tabButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active class from all
    tabButtons.forEach(b => b.classList.remove('active'));
    // Add active class to clicked
    btn.classList.add('active');
    // Update state
    currentTab = btn.dataset.tab;
    render();
  });
});

// Initial Render
render();