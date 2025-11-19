# Copilot Instructions

## Project Overview
This is a Jekyll-based GitHub Pages site (`theme: jekyll-theme-cayman`) serving as a personal playground for experiments and accessibility testing examples.

## Project Structure
- **Root markdown files**: Content pages (restaurant menus, notes)
- **`examples/accessibility/`**: Accessibility testing examples and demonstrations
- **`_config.yml`**: Jekyll site configuration

## Accessibility Testing Conventions

### File Organization
Accessibility examples follow this pattern:
- `examples/accessibility/<component-name>.html` - Semantic HTML with ARIA attributes
- `examples/accessibility/<component-name>.css` - Presentation layer (separate file)
- `examples/accessibility/<component-name>.js` - Behavior layer (separate file)

**Always maintain separation of concerns**: Content (HTML), Presentation (CSS), and Behavior (JS) in separate files.

### Accessibility Standards
When creating or modifying accessibility examples:

1. **ARIA Relationships**: Use explicit ARIA attributes for component relationships
   - Example: `aria-controls` to link buttons to controlled content
   - Example: `aria-expanded` to indicate disclosure state

2. **Visual Indicators**: Create visual indicators using CSS pseudo-elements (not text)
   - Use `::before` or `::after` with empty `content: ''`
   - Create shapes with CSS borders, not Unicode characters
   - Example: `disclosure-widget.css` uses CSS triangles with border tricks

3. **Contrast Requirements**: All graphical elements must meet 3:1 contrast against adjacent colors
   - Test using the contrast calculation formula (see terminal history for Python script)
   - Check both default and interactive states

4. **Testing Workflow**:
   ```bash
   # Run axe accessibility tests
   axe file:///absolute/path/to/file.html --show-errors
   ```

5. **Native Button Behavior**: Rely on native `<button>` keyboard support when possible
   - Only add explicit keyboard handlers when extending native behavior
   - Test that Space and Enter work without custom handlers

### Key Files
- `examples/accessibility/disclosure-widget.{html,css,js}` - Reference implementation showing all conventions

## Development Notes
- This is a static site; no build process required
- Content is primarily markdown files
- Focus on creating minimal, testable accessibility examples (not educational content)
