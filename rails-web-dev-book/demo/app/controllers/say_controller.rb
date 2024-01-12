class SayController < ApplicationController
  def hello
    @time = Time.now
    @name = "Charlie"    
  end

  def goodbye
    @files = Dir.glob('*')
  end
end
