# Handcrafted by Aydar N.
# 2023
#
# me@aydar.media
#

# frozen_string_literal: true

module PagesHelper
	def render_block(partial_name, class_name: nil, locals: {})
		return (render partial: 'blocks/proxy', locals: { partial_name: partial_name, class_name: class_name, proxied_locals: locals })
	end
end
