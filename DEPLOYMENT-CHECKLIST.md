# Magoshi Events - Deployment Checklist

Use this checklist to ensure your website is ready for launch.

---

## ✅ PRE-LAUNCH CHECKLIST

### 1. Content Upload
- [ ] Logo uploaded (`assets/images/logo/logo.png`)
- [ ] Hero background image uploaded (`assets/images/hero.jpg`)
- [ ] About section image uploaded (`assets/images/about.jpg`)
- [ ] Booking background image uploaded (`assets/images/booking-bg.jpg`)
- [ ] Video thumbnail uploaded (`assets/images/video-thumbnail.jpg`)
- [ ] All 6 service images uploaded (`assets/images/services/service1-6.jpg`)
- [ ] All 10 gallery images uploaded (`assets/images/gallery/gallery1-10.jpg`)
- [ ] Event video uploaded (`assets/videos/magoshi-events.mp4`)

### 2. Content Verification
- [ ] All images are high-quality and professional
- [ ] Images are properly compressed for web (not too large)
- [ ] No TikTok/Instagram screenshots with UI elements
- [ ] Video plays correctly
- [ ] All images represent actual Magoshi Events work

### 3. Functionality Testing
- [ ] Navigation menu works on desktop
- [ ] Hamburger menu works on mobile
- [ ] All smooth scrolling links work
- [ ] Hero "Explore Our Work" button scrolls to gallery
- [ ] Hero "Book Your Event" button opens WhatsApp
- [ ] All 6 service "Enquire on WhatsApp" buttons work
- [ ] Gallery images open in lightbox when clicked
- [ ] Lightbox next/previous buttons work
- [ ] Lightbox close button works
- [ ] Lightbox keyboard controls work (Esc, Arrow keys)
- [ ] Video plays when clicked
- [ ] "Watch More on TikTok" button opens TikTok page
- [ ] WhatsApp enquiry form validates required fields
- [ ] WhatsApp enquiry form opens WhatsApp with formatted message
- [ ] Contact section WhatsApp button works
- [ ] Floating WhatsApp button works
- [ ] Instagram link opens correct profile
- [ ] TikTok link opens correct profile
- [ ] Back-to-top button appears on scroll
- [ ] Back-to-top button scrolls to top smoothly
- [ ] Footer links work correctly

### 4. Responsive Design Testing

#### Desktop (1200px+)
- [ ] Layout looks professional
- [ ] All sections are well-spaced
- [ ] Images load correctly
- [ ] Navigation is horizontal
- [ ] All text is readable

#### Tablet (768px - 991px)
- [ ] Layout adjusts properly
- [ ] Images scale correctly
- [ ] Navigation menu works
- [ ] Gallery shows 2 columns
- [ ] All buttons are clickable

#### Mobile (below 768px)
- [ ] Hamburger menu appears and works
- [ ] No horizontal scrolling
- [ ] All text is readable
- [ ] Buttons are easy to tap
- [ ] Gallery shows 1-2 columns
- [ ] WhatsApp buttons work
- [ ] Form is usable
- [ ] Video fits screen

### 5. Browser Testing
- [ ] Google Chrome (latest)
- [ ] Mozilla Firefox (latest)
- [ ] Microsoft Edge (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iPhone)
- [ ] Chrome Mobile (Android)

### 6. Contact Information Verification
- [ ] Phone number is correct: 082 946 6671
- [ ] WhatsApp number is correct: +27829466671
- [ ] Instagram link is correct: @magoshi_events
- [ ] TikTok link is correct: @magoshievents
- [ ] Address is correct: Lekoko Street, Manganeng, Limpopo, 1127
- [ ] Service areas mentioned: Limpopo & Gauteng

### 7. SEO & Meta Tags
- [ ] Page title is set correctly
- [ ] Meta description is compelling
- [ ] Open Graph tags are present
- [ ] Structured data (LocalBusiness) is included
- [ ] Sitemap.xml exists
- [ ] Robots.txt exists
- [ ] All images have descriptive alt text

### 8. Performance
- [ ] Images are compressed but still high quality
- [ ] Page loads in under 3 seconds
- [ ] No console errors in browser developer tools
- [ ] Animations are smooth
- [ ] No broken links

### 9. Accessibility
- [ ] All images have alt text
- [ ] Form labels are properly associated
- [ ] Keyboard navigation works
- [ ] Color contrast is sufficient
- [ ] Focus indicators are visible

---

## 🚀 DEPLOYMENT STEPS

### Choose Your Hosting Method:

#### Option A: Traditional Web Hosting
1. [ ] Purchase domain name (e.g., magoshievents.com)
2. [ ] Purchase web hosting (shared hosting is sufficient)
3. [ ] Upload all files via FTP or cPanel File Manager
4. [ ] Maintain folder structure exactly
5. [ ] Test website at your domain
6. [ ] Configure SSL certificate (HTTPS)

#### Option B: GitHub Pages (Free)
1. [ ] Create GitHub account
2. [ ] Create new repository named "magoshi-events"
3. [ ] Upload all project files
4. [ ] Go to Settings → Pages
5. [ ] Select main branch as source
6. [ ] Save and wait for deployment
7. [ ] Access at username.github.io/magoshi-events
8. [ ] Optional: Configure custom domain

#### Option C: Netlify (Free)
1. [ ] Create Netlify account at netlify.com
2. [ ] Click "Add new site" → "Deploy manually"
3. [ ] Drag and drop entire project folder
4. [ ] Wait for deployment (usually under 1 minute)
5. [ ] Get instant URL (e.g., random-name.netlify.app)
6. [ ] Optional: Configure custom domain
7. [ ] Automatic HTTPS included

#### Option D: Vercel (Free)
1. [ ] Create Vercel account at vercel.com
2. [ ] Import project from computer or Git
3. [ ] Deploy with one click
4. [ ] Get instant URL
5. [ ] Optional: Configure custom domain
6. [ ] Automatic HTTPS included

---

## 📝 POST-DEPLOYMENT TASKS

### 1. Update URLs After Deployment
- [ ] Update `sitemap.xml` with actual domain name
- [ ] Update Open Graph URL in `index.html`
- [ ] Update structured data URL in `index.html`

### 2. Website Promotion
- [ ] Add website link to Instagram bio
- [ ] Add website link to TikTok bio
- [ ] Add website link to WhatsApp Business profile
- [ ] Share website on Facebook (if applicable)
- [ ] Print website URL on business cards
- [ ] Include website in email signatures

### 3. SEO & Analytics (Optional)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics (optional)
- [ ] Set up Facebook Pixel (optional)
- [ ] Create Google My Business listing
- [ ] Ensure business info matches across all platforms

### 4. Social Media Integration
- [ ] Create Instagram post announcing new website
- [ ] Create TikTok video showcasing website
- [ ] Pin website link in social media posts
- [ ] Add "Visit our website" to Instagram Stories highlights

### 5. Monitoring & Maintenance
- [ ] Test website weekly for broken links
- [ ] Update gallery with new event photos regularly
- [ ] Check WhatsApp integration monthly
- [ ] Monitor website speed and performance
- [ ] Keep contact information current
- [ ] Respond promptly to WhatsApp enquiries

---

## 🔧 TROUBLESHOOTING

### Images Not Showing
- Check file paths match exactly (case-sensitive)
- Ensure images are in correct folders
- Verify image file extensions (.jpg, .png)
- Check image file sizes (compress if over 1MB each)

### WhatsApp Not Opening
- Verify phone number format: +27829466671
- Test on different devices
- Ensure WhatsApp is installed on mobile
- Check browser allows opening external apps

### Mobile Menu Not Working
- Clear browser cache
- Test on different mobile browsers
- Check JavaScript errors in console
- Ensure JavaScript file is loaded

### Video Not Playing
- Verify video file exists at correct path
- Check video format is MP4 (H.264 codec)
- Test video file plays locally first
- Compress video if over 50MB

### Slow Loading
- Compress all images (use TinyPNG or similar)
- Optimize video file size
- Check internet connection speed
- Test on different networks

---

## 📊 SUCCESS METRICS

After launching, track:
- [ ] Number of WhatsApp enquiries per week
- [ ] Which services get most enquiries
- [ ] Mobile vs desktop visitors (if analytics enabled)
- [ ] Social media clicks to website
- [ ] Booking conversion rate

---

## 🎯 LAUNCH DAY CHECKLIST

**Final Checks Before Going Live:**

1. [ ] All content is uploaded and verified
2. [ ] All functionality tested on multiple devices
3. [ ] Contact information is 100% correct
4. [ ] Website looks professional and complete
5. [ ] No placeholder text or images remain
6. [ ] Load time is acceptable (under 3 seconds)
7. [ ] All social media links work
8. [ ] WhatsApp integration tested thoroughly
9. [ ] Mobile version tested on real phones
10. [ ] Someone else has reviewed the website

**When Ready:**
- [ ] Deploy to chosen hosting platform
- [ ] Test deployed version thoroughly
- [ ] Announce launch on social media
- [ ] Start directing customers to website

---

## 📞 POST-LAUNCH SUPPORT

**Common Questions:**

**Q: How do I update my gallery images?**
A: Simply replace the files in `assets/images/gallery/` with new images using the same filenames. Changes appear immediately.

**Q: Can I add more services?**
A: Yes, copy an existing service card in `index.html`, update the content, and add a new service image.

**Q: How do I change my phone number?**
A: Search for "27829466671" in `index.html` and replace all occurrences with your new number.

**Q: The website looks different on my phone**
A: This is normal and intentional. The website adapts its layout for smaller screens (responsive design).

**Q: Can I add more gallery images?**
A: Yes, add images to the gallery folder and copy a gallery item div in the HTML, updating the image source.

---

## ✅ COMPLETION

When all items above are checked:

🎉 **Congratulations! Your Magoshi Events website is live!** 🎉

Your professional online presence will help attract new clients and showcase your beautiful event work.

**Remember to:**
- Keep content fresh with new event photos
- Respond quickly to WhatsApp enquiries
- Share website regularly on social media
- Monitor and maintain the website monthly

---

**Magoshi Events - Where Every Detail Is Divine**

For any technical questions, refer to the main README.md file.
