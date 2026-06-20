import { createPresenter, ui } from '@vurb/core';
import { FakerListModel } from '../models/index.js';

interface FakerData {
    type?: string;
    items_raw?: Record<string, any>[];
}

export const FakerPresenter = createPresenter('Faker')
  .schema(FakerListModel as any)
  .systemRules([])
  .agentLimit(100, (omitted) => ui.summary(`⚠️ ${omitted} items hidden.`))
  .uiBlocks((data: unknown) => {
    const d = data as FakerData;
    let text = `🎯 **Faker: ${String(d.type || 'LIST').toUpperCase()}**\n\n`;
    const items = d.items_raw || [];
    
    if (!items.length) {
        text += `> No records.\n`;
        return [ui.markdown(text)];
    }
    
    for (const i of items.slice(0, 20)) {
      const name = i.name || i.title || i.firstname || i.company_name || i.word || i.username || i.id || 'Item';
      text += `- **${name}**\n`;
    }
    
    if (items.length > 20) {
        text += `- *...and ${items.length - 20} more*\n`;
    }
    
    return [
        ui.markdown(text),
        ui.json(items.slice(0, 2))
    ];
  });
