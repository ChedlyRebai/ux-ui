# CovoitEsprit - Carpooling Application

A modern carpooling web application built with **Tailwind CSS** and responsive design. This project demonstrates a complete carpooling platform with pages for riders and drivers.

## 📁 Project Structure

```
.
├── src/
│   ├── components/                 # HTML component files
│   │   ├── Header.html
│   │   ├── Footer.html
│   │   ├── LoginPage.html
│   │   ├── BookingPage.html
│   │   ├── PaymentPage.html
│   │   ├── ConfirmationPage.html
│   │   ├── DashboardPage.html
│   │   └── PendingRequestsPage.html
│   ├── styles/
│   │   ├── main.scss               # Main SCSS file with Tailwind directives
│   │   └── components/
│   │       ├── Header.scss
│   │       ├── Footer.scss
│   │       ├── LoginPage.scss
│   │       ├── BookingPage.scss
│   │       ├── PaymentPage.scss
│   │       ├── ConfirmationPage.scss
│   │       ├── DashboardPage.scss
│   │       └── PendingRequestsPage.scss
│   └── style.css                   # Tailwind directives file
├── public/
│   ├── index.html                  # Homepage
│   ├── login.html                  # Login page
│   ├── booking.html                # Booking page
│   ├── payment.html                # Payment page
│   ├── confirmation.html           # Confirmation page
│   ├── dashboard.html              # Driver dashboard
│   ├── pending-requests.html       # Pending requests page
│   ├── style.css                   # Compiled CSS (auto-generated)
│   └── styles/
│       └── (compiled component styles)
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── package.json                    # Project dependencies
└── README.md                       # This file
```

## 🎨 Design Palette

- **Primary Blue**: `#1e3a8a` (Dark Blue)
- **Light Blue**: `#3b82f6` (Accent Blue)
- **Green**: `#10b981` (Success)
- **Orange**: `#f97316` (Warning)
- **Red**: `#ef4444` (Danger)
- **Gray**: `#6b7280` (Text/Secondary)

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   This command:
   - Watches `src/style.css` for changes
   - Compiles and processes CSS with Tailwind
   - Outputs to `public/style.css`

3. **Build for production:**
   ```bash
   npm run build
   ```
   This creates a minified version of the CSS for deployment.

## 🚀 Available Pages

### Rider Pages
- **Home** (`index.html`) - Landing page with features
- **Login** (`login.html`) - User authentication
- **Booking** (`booking.html`) - Book a ride with trip details
- **Payment** (`payment.html`) - Complete payment for ride
- **Confirmation** (`confirmation.html`) - Ride confirmation

### Driver Pages
- **Dashboard** (`dashboard.html`) - Driver earnings & statistics
- **Pending Requests** (`pending-requests.html`) - Incoming ride requests

## 🛠 Key Components

### Header
- Logo with app name
- Navigation links
- "Create a Ride" button
- User profile icon
- Responsive navigation

### Footer
- Brand information
- Quick links (Explore, Support)
- Social media links
- Copyright information

### Forms
- Responsive input fields
- Date/time pickers
- Select dropdowns
- Form validation styling

### Cards
- Stat cards with key metrics
- Request cards with action buttons
- Summary cards for trip details

### Dashboard
- Statistics grid
- Transaction table
- Revenue chart placeholder
- Sidebar navigation

## 🎯 Features

✅ **Responsive Design** - Mobile, tablet, and desktop optimized
✅ **Modern UI** - Clean and professional interface
✅ **Tailwind CSS** - Utility-first CSS framework
✅ **Component-based** - Reusable SCSS components
✅ **Multiple Layouts** - Different page layouts for different user types
✅ **Color Scheme** - Consistent color palette throughout
✅ **Interactive Elements** - Buttons, forms, and navigation

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: < 768px  
- **Desktop**: > 1024px

## 🔧 Technologies Used

- **Tailwind CSS** (v3.4.19) - Utility-first CSS framework
- **PostCSS** (v8.5.6) - CSS transformation tool
- **Autoprefixer** (v10.4.23) - Vendor prefix support
- **HTML5** - Semantic markup
- **CSS3** - Modern styling

## 📝 Development Guide

### Adding New Components

1. Create SCSS file in `src/styles/components/`
2. Import in `src/styles/main.scss`
3. Create HTML component in `src/components/`
4. Use in public HTML pages

### Customizing Tailwind

Edit `tailwind.config.js` to:
- Add custom colors
- Extend spacing
- Add custom plugins
- Configure content paths

### Styling Conventions

- Use SCSS nesting for organization
- Keep component styles isolated
- Use CSS custom properties for colors
- Maintain consistent spacing with variables

## 🚀 Deployment

### Build for production:
```bash
npm run build
```

### Upload to hosting:
- Upload contents of `public/` folder
- Ensure `style.css` is properly linked
- Test all pages in production environment

## 🤝 Contributing

Feel free to fork, modify, and improve this project. Some ideas:
- Add backend API integration
- Implement payment gateway
- Add real map integration
- Build mobile app version
- Add authentication system

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a demonstration of modern web development with Tailwind CSS and responsive design.

---

**Happy coding! 🎉**
