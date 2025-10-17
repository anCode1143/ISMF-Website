# Macro Dashboard Component

## Overview
The Macro Dashboard component displays real-time economic indicators (Inflation Rate and Unemployment Rate) with interactive charts and detailed analysis modals.

## Features
- **Real-time Data**: Fetches economic indicators from public APIs
- **Interactive Charts**: Hover tooltips, clickable charts for detailed views
- **Modal Analysis**: Detailed historical trends and research insights
- **Responsive Design**: Works on desktop and mobile devices
- **Professional Styling**: Consistent with ISMF branding

## Data Sources
The component is designed to work with multiple data sources:

### 1. FRED API (Federal Reserve Economic Data)
- **URL**: https://fred.stlouisfed.org
- **API Key**: Register at https://fred.stlouisfed.org/docs/api/api_key.html
- **Series IDs**:
  - Inflation: `CPIAUCSL` (Consumer Price Index)
  - Unemployment: `UNRATE` (Unemployment Rate)

### 2. OECD Data API
- **URL**: https://data.oecd.org
- **Indicators**: Consumer prices, Unemployment rates

### 3. World Bank Open Data
- **URL**: https://data.worldbank.org
- **Indicators**: Inflation, Employment data

## Implementation

### Current Setup (Mock Data)
The component currently uses realistic mock data for demonstration purposes.

### To Use Real API Data:

1. **Get API Keys**:
   ```bash
   # FRED API Key
   # Register at: https://fred.stlouisfed.org/docs/api/api_key.html
   ```

2. **Update Configuration**:
   ```typescript
   // src/services/economicData.ts
   const FRED_API_KEY = 'your-api-key-here';
   ```

3. **Enable Real Data Fetching**:
   ```typescript
   // In fetchEconomicData function, replace:
   return generateRealisticData();
   // With:
   return await fetchRealEconomicData();
   ```

4. **Uncomment FRED Implementation**:
   ```typescript
   // Uncomment the fetchFredData and fetchRealEconomicData functions
   ```

## Component Structure

### ChartCard Component
- Displays individual economic indicators
- Shows current value, change, and trend
- Includes mini chart with 12-month history
- Clickable for detailed modal view

### Modal Features
- Full historical chart (24 months)
- Research insights and analysis
- Professional financial dashboard styling

### Styling
- **Colors**: Uses ISMF color palette
  - Background: `#FFFCF2` (Ivory)
  - Primary: `#6184D8` (Cornflower)
  - Secondary: `#1D3461` (Delft)
  - Text: `#011936` (Oxford)
  - Chart Background: `#81B9EE` (Blush)

## API Integration Examples

### FRED API Example
```typescript
const fetchFredData = async (seriesId: string) => {
  const response = await axios.get(`${FRED_BASE_URL}/series/observations`, {
    params: {
      series_id: seriesId,
      api_key: FRED_API_KEY,
      file_type: 'json',
      limit: 24,
      sort_order: 'desc'
    }
  });
  
  return response.data.observations
    .map(obs => parseFloat(obs.value))
    .filter(val => !isNaN(val))
    .reverse();
};
```

### Error Handling
The component includes comprehensive error handling:
- Loading states with skeleton UI
- Error states with retry functionality
- Fallback to mock data if APIs are unavailable

## Performance
- **Caching**: React Query caches data for 5 minutes
- **Optimistic Updates**: Smooth loading transitions
- **Responsive**: Optimized for mobile and desktop

## Accessibility
- **ARIA Labels**: Proper screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: Meets WCAG guidelines
- **Focus Management**: Proper focus handling in modals

## Future Enhancements
- Additional economic indicators (GDP, Interest Rates)
- Real-time updates with WebSocket connections
- Export functionality for charts
- Custom date range selection
- Comparison with other countries/regions

## Dependencies
- `@tanstack/react-query`: Data fetching and caching
- `recharts`: Chart visualization
- `axios`: HTTP client for API calls
- `date-fns`: Date manipulation
- `lucide-react`: Icons
- `shadcn/ui`: UI components
